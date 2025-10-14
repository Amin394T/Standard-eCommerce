function Filters() {
  return (
    <div className="filters-bar">

      <div className="filter search-name">
        <p> Search By Name : </p>
        <input type="text" placeholder=" Search ..." />
      </div>

      <div className="filter orderBy">
        <p> Order By : </p>
        <select name="order">
          <option value="price"> By Price </option>
          <option value="type"> By Type </option>
          <option value="name"> By Name </option>
          <option value="score"> By Score </option>
        </select>
        <button> Invert Order  </button>
      </div>

      <div className="filter price-filter">
        <p> Price Range : </p>
        <label> Min :&nbsp;<input type="range" min="0" max="1000" value="0"/> </label>
        <label> Max :&nbsp;<input type="range" min="0" max="1000" value="1000"/> </label>
      </div>
      
      <div className="filter type-filter">
        <p> Product Type : </p>
        <label> <input type="checkbox" value="type1"/> Type 1 </label>
        <label> <input type="checkbox" value="type2"/> Type 2 </label>
        <label> <input type="checkbox" value="type3"/> Type 3 </label>
        <label> <input type="checkbox" value="type4"/> Type 4 </label>
        <label> <input type="checkbox" value="type5"/> Type 5 </label>
      </div>

      <div className="filter score-filter">
        <p> Minimal Score : </p>
        <label> <input type="radio" name="quality" value="great"/> Great </label>
        <label> <input type="radio" name="quality" value="average"/> Average </label>
        <label> <input type="radio" name="quality" value="poor"/> Poor </label>
      </div>
      
    </div>


  )
}

export default Filters