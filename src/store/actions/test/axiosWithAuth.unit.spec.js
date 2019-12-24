import axiosWithAuth from "../axiosWithAuth";
import sinon from "sinon";
import axios from "axios";

describe("axiosWithAuth", () => {
  localStorage.setItem("token", "fakeToken");
  const stubGetItem = sinon.stub(Storage.prototype, "getItem"); // we gotta spy on Storage.prototype to peek into localStorage methods!
  stubGetItem.returns("fakeToken"); 
  // we replace axios's .create() method with a stub, so we can force it to return what we want and can spy on any calls
  const stubAxiosCreate = sinon.stub(axios, "create");
  stubAxiosCreate.returns("Axios create was called");
  test("should return an axios instance", () => {
    axiosWithAuth();

    expect(stubAxiosCreate.args[0][0]).toStrictEqual({
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer fakeToken"
      }
    });

    expect(stubGetItem.calledOnceWith("token")).toBe(true);
  });
});
