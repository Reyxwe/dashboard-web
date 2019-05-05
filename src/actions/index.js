export default {
  setInputValue: (inputValue) => state =>
    ({...state,
      inputValue: inputValue.trim()
    }),
  setInputFocus: (focus) => state =>
    ({...state,
      inputFocus: focus
    }),
  getCountries: (countries) => state =>
    ({...state,
      countries: countries
    }),
  resetCountries: () => state =>
    ({...state,
      inputValue: '',
      nbSelectedCountries: 0,
      countries: state.countries.map((item) => ({...item, checked: false, includes: false, startsWith: false}))
    }),
  filterCountries: () => state =>
    ({...state,
      countries: state.countries
        .map((item) => item.name.toLowerCase().includes(state.inputValue.toLowerCase()) ? {...item, includes: true} : {...item, includes: false})
        .map((item) => item.name.toLowerCase().startsWith(state.inputValue.toLowerCase()) ? {...item, startsWith: true} : {...item, startsWith: false})
    }),
  toggleCountry: (numericCode) => state =>
    ({...state,
      countries: state.countries.map((item) => item.numericCode === numericCode ? {...item, checked: !item.checked} : item)
    }),
  countSelectedCountries: () => state =>
    ({...state,
      nbSelectedCountries: state.countries.reduce((acc, item) => (item.checked === true) ? acc + 1 : acc, 0)
    }),
  sortByPopulation: () => state =>
    ({
      ...state,
      countries: state.countries.sort((a, b) => a.population - b.population)
    }),
  sortByGini: () => state =>
    ({
      ...state,
      countries: state.countries.sort((a, b) => a.gini - b.gini)
    })
}
