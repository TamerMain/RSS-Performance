import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';
import { List, type RowComponentProps } from 'react-window';

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

export const CountryList = ({
  countries,
  searchQuery,
  selectedColumns,
  selectedRegion,
  selectedYear,
  sortField,
  sortOrder,
}: CountryListProps) => {
  const filteredCountries = countries
    .filter((c) => {
      const matchesSearch = c.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = !selectedRegion || c.data.some((d) => d.region === selectedRegion);
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
    });

  const CountryRowComponent = ({
    index,
    style,
    countries,
    selectedYear,
    selectedColumns,
  }: RowComponentProps<{
    countries: Country[];
    selectedYear: number;
    selectedColumns: string[];
  }>) => {
    const country = countries[index];
    return (
      <div style={style}>
        <CountryCard
          country={country}
          selectedYear={selectedYear}
          selectedColumns={selectedColumns}
        />
      </div>
    );
  };

  const RowHeight = 200 + selectedColumns.length * 38;

  return (
    <div className={styles.countryList}>
      <List<RowProps>
        rowComponent={CountryRowComponent}
        rowCount={filteredCountries.length}
        rowHeight={RowHeight}
        rowProps={{ countries: filteredCountries, selectedYear, selectedColumns }}
      />
    </div>
  );
};
