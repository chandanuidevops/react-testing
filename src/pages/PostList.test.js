import React from "react";
import { render, screen } from "@testing-library/react";
import { useQuery } from "react-query";
import { useColorMode, useTheme } from "@chakra-ui/core";
import PostList from "./PostList";
import { BrowserRouter } from "react-router-dom";
jest.mock("react-query");

describe("PostList", () => {
  it("When isLoading is true then loading text should display", () => {
    //Arrange
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    useColorMode.mockReturnValue({ colorMode: "light" });
    useTheme.mockReturnValue({});
    //Act
    render(<PostList isDrawerOpen={false} closeDrawer={jest.fn} />);
    //Assertion

    // const text = screen.queryByText("Loading..").innerHTML;
    const text = screen.queryByTestId("loading-text");
    // expect(text).toBe("Loading..");

    expect(text).toHaveTextContent("Loading..");
  });
  it("When isLoading is false and data exist the render list of data", () => {
    //Arrange
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        data: [{ id: 1, title: "Dummy Title" }],
      },
    });

    render(
      <BrowserRouter>
        <PostList isDrawerOpen={false} closeDrawer={jest.fn} />
      </BrowserRouter>
    );
    const data = screen.getAllByTestId("list-item").map((li) => li.textContent);
    //    expect(data).toEqual(['Dummy Title'])
    expect(data).toMatchInlineSnapshot(
      ["Dummy Title"],
      `
      Object {
        "0": "Dummy Title",
      }
    `
    );
  });
});
