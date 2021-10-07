import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  selectedProducts,
  removwSelectedProducts,
} from "../redux/actions/ProductAction";
import axios from "axios";

import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  category: {
    margin: " 20px auto 10px auto",
    width: "500px",
    alignContent: "center",
  },
  cat: {
    margin: " 20px 8px 10px 426px",
    width: "500px",
    alignContent: "center",
  },
}));

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { name, price, description, categoryid } = product;
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://aveosoft-react-assignment.herokuapp.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
    return () => {
      dispatch(removwSelectedProducts());
    };
  }, [id]);
  const category = categoryid == 1 ? "mobile" : "laptop";

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5}>
              <img
                style={{ padding: "20px" }}
                height="450"
                width="350"
                src={`https://source.unsplash.com/1600x900/?${category}`}
                alt="laptop "
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Price : {price} Rs.
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Product Details:
              </Typography>
              <hr />
              <Typography gutterBottom variant="h6" component="div">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductDetails;
