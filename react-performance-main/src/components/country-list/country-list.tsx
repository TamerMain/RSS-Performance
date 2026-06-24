import { useMemo, memo } from 'react';
import { List, type RowComponentProps } from 'react-window';
import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';
import styles from './country-list.module.css';

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedRegion: string;
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
  onYearChange: (year: number) => void;
};

type RowProps = {
  countries: Country[];
  selectedYear: number;
  selectedColumns: string[];
};

const CountryRow = memo(
  ({ index, style, countries, selectedYear, selectedColumns }: RowComponentProps<RowProps>) => {
    const country = countries[index];

    if (!country) return null;

    return (
      <div style={style}>
        <CountryCard
          country={country}
          selectedYear={selectedYear}
          selectedColumns={selectedColumns}
        />
      </div>
    );
  }
) as (props: RowComponentProps<RowProps>) => React.ReactElement | null;

const ListContainerSize = { height: '100vh' };

export const CountryList = memo(
  ({
    countries,
    searchQuery,
    selectedColumns,
    selectedRegion,
    selectedYear,
    sortField,
    sortOrder,
  }: CountryListProps) => {
    const filteredCountries = useMemo(
      () =>
        countries
          .filter((c) => {
            const matchesSearch = c.id.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRegion =
              !selectedRegion || c.data.some((d) => d.region === selectedRegion);
            return matchesSearch && matchesRegion;
          })
          .sort((a, b) => {
            if (sortField === 'name') {
              return sortOrder === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
            } else {
              const popA = getPopulationForYear(createYearDataMap(a.data), selectedYear) || 0;
              const popB = getPopulationForYear(createYearDataMap(b.data), selectedYear) || 0;
              return sortOrder === 'asc' ? popA - popB : popB - popA;
            }
          }),
      [countries, searchQuery, selectedRegion, selectedYear, sortField, sortOrder]
    );

    const rowHeight = 200 + selectedColumns.length * 38;
    const rowProps = useMemo(
      () => ({
        countries: filteredCountries,
        selectedYear,
        selectedColumns,
      }),
      [filteredCountries, selectedYear, selectedColumns]
    );

    return (
      <div className={styles.countryList} style={{ height: '100vh' }}>
        <List
          rowComponent={CountryRow}
          rowCount={filteredCountries.length}
          rowHeight={rowHeight}
          rowProps={rowProps}
          overscanCount={3}
        />
      </div>
    );
  }
);
