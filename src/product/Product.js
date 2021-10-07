import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = (props) => {
  let products = useSelector((state) => state.allProducts.products);
  if (props && props.category > -1) {
    products = products.filter((x) => {
      return x.categoryId == props.category;
    });
  }
  const renderList = products.map((product) => {
    const { id, name, price, model, categoryId } = product;
    const category = categoryId == 1 ? "mobile" : "laptop";
    return (
      <div
        key={id}
        style={{
          display: "flex",
          padding: "5%",
          flexGrow: 1,
          flexBasis: "15%",
        }}
      >
        <Link to={`/product/${id}`}>
          <Card sx={{ maxWidth: 400, height: 300 }} key={id}>
            <CardMedia
              component="img"
              height="140"
              image={`https://source.unsplash.com/1600x900/?${category}`}
              alt="laptop "
            />
            <CardContent>
              <Typography gutterBottom component="div">
                {name}
              </Typography>
              <Typography gutterBottom component="div">
                Price :{price}RS
              </Typography>
              <Typography gutterBottom component="div">
                Product Model:
                {model}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
