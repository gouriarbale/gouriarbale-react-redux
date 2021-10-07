import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../services/ProductService";
import Product from "./Product";
import { setProducts } from "../redux/actions/ProductAction";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  category: {
    margin: " 39px 10px 5px 367px",
    width: "300px",
    height: "45",
    alignContent: "center",
  },
  cat: {
    margin: " 20px -5px -71px 231px",
    width: "500px",
    alignContent: "center",
  },
}));

const ProductList = () => {
  const classes = useStyles();

  const [category, setCategory] = useState();
  const [selectedcategory, setSelectedCategory] = useState();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    ProductService.fetchProducts().then((response) => {
      dispatch(setProducts(response.data));
    });
    ProductService.fetchCategories().then((response) => {
      setCategory(response.data);
    });
  }, []);
  return (
    <>
      <InputLabel className={classes.cat} id="demo-simple-select-label">
        Product Category
      </InputLabel>
      <Select
        className={classes.category}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedcategory}
        onChange={handleChange}
        defaultValue={-1}
        size="small"
      >
        <MenuItem value={-1}>All</MenuItem>
        {category &&
          category.map((data) => {
            return (
              <MenuItem key={data.id} value={data.id}>
                {data.name}
              </MenuItem>
            );
          })}
      </Select>

      {/* <h1>This is product List</h1> */}
      <div
        style={{
          display: "flex",
          color: "red",
          width: "800px",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        <Product category={selectedcategory} />
      </div>
    </>
  );
};

export default ProductList;
