import { create } from "zustand";

interface FilterState {
  searchFilter: string;
  manufacturerDropdownFilter: string;
  provinceDropdownFilter: string;
  cityDropdownFilter: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  priceRangeFilter: any;
  clearFilter: string;
}

const useFilterStore = create<FilterState>((set) => ({
  searchFilter: "",
  manufacturerDropdownFilter: "",
  provinceDropdownFilter: "",
  cityDropdownFilter: "",
  currentPage: 0,
  priceRangeFilter: null,
  clearFilter: "",
  setSearchFilter: (value: string) =>
    set((state) => ({ ...state, searchFilter: value })),
  setManufacturerDropdownFilter: (value: string) =>
    set((state) => ({ ...state, manufacturerDropdownFilter: value })),
  setProvinceDropdownFilter: (value: string) =>
    set((state) => ({ ...state, provinceDropdownFilter: value })),
  setCityDropdownFilter: (value: string) =>
    set((state) => ({ ...state, cityDropdownFilter: value })),
  setCurrentPage: (page: number) =>
    set((state) => ({ ...state, currentPage: page })),
  setPriceRange: (value: number) =>
    set((state) => ({ ...state, priceRangeFilter: value })),
  setClearFilter: (value: string) =>
    set((state) => ({ ...state, clearFilter: value })),
}));

export default useFilterStore;
