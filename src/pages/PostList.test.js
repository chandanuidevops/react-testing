import React from "react";
import { render, screen } from "@testing-library/react";
import { useQuery } from "react-query";
import PostList from "./PostList";
jest.mock("react-query");

describe("PostList", () => {
  it("When isLoading is true then loading text should display", () => {
    //Arrange
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });
    //Act
    render(<PostList isDrawerOpen={false} closeDrawer={jest.fn} />);
    //Assertion

    // const text = screen.queryByText("Loading..").innerHTML;
    const text = screen.queryByTestId("loading-text");
    // expect(text).toBe("Loading..");
    screen.
    expect(text).toHaveTextContent("Loading..");
  });
  //it('When isLoading is false and data exist the render list of data')
});
