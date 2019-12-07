import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import SearchForm from "../searchForm";
import SearchResults from "../searchResults";
import SearchPageConnected, { SearchPage } from "../searchPage";
import sinon from "sinon";

/*
  [Error cleared]: !
    SearchPage error => <tbody> cannot appear as a child of <div>
*/

let store;
let wrapper;
const mockItems = [
  {
    food_name: "Pupusa",
    standard_amount: 1,
    calories: 2.99
  },
  {
    food_name: "Tacos",
    standard_amount: 4,
    calories: 14.2
  },
  {
    food_name: "Cheese Hamburguer",
    standard_amountt: 1,
    calories: 2093.1
  }
];


