import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      {/* <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb> */}
      <Breadcrumb>
        <BreadcrumbItem><a href="http://localhost:3000/">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="http://localhost:3000/ingredient">IngredientSearch</a></BreadcrumbItem>
        <BreadcrumbItem active>CalorieSearch</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Example;