
const Search = ({searchValue, setSearchValue}) => {
  return (
    <div>
        <form className="search">
            <input type="text" placeholder="Search movi by name" 
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            />
            <button>Search</button>
        </form>
    </div>
  )
}

export default Search