import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";

import { App } from "./App";


it("should see the scale app", () => {
  render(<App />);

  const weightInput = screen.getByLabelText("Peso:");
  const priceInput = screen.getByLabelText("Precio:");
  const totalInput = screen.getByLabelText("Total:");
  const banana = screen.getByLabelText("Plátano");
  const orange = screen.getByLabelText("Naranja");
  const grape = screen.getByLabelText("Uva");
  const watermelon = screen.getByLabelText("Sandía");
  const melon = screen.getByLabelText("Melón");
  const kiwi = screen.getByLabelText("Kiwi");
  const earlyFig = screen.getByLabelText("Breva");
  const avocado = screen.getByLabelText("Aguacate");
  const mango = screen.getByLabelText("Mango");
  const calculateButton = screen.getByText("Calcular");
  const error = screen.queryByText("Error");

  expect(weightInput).toBeInTheDocument();
  expect(priceInput).toBeInTheDocument();
  expect(totalInput).toBeInTheDocument();
  expect(banana).toBeInTheDocument();
  expect(orange).toBeInTheDocument();
  expect(grape).toBeInTheDocument();
  expect(watermelon).toBeInTheDocument();
  expect(melon).toBeInTheDocument();
  expect(kiwi).toBeInTheDocument();
  expect(earlyFig).toBeInTheDocument();
  expect(avocado).toBeInTheDocument();
  expect(mango).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
  expect(error).not.toBeInTheDocument();
});

it("should be able to introduce a weight", () => {
  render(<App />);

  // Weigh a fruit
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");

  expect(weightInput).toHaveValue(2);
});

it.skip("should be able to select a fruit and see its price", () => {
  render(<App />);

  // Clicks on the watermelon button
  const watermelonButton = screen.getByLabelText("Sandía");
  userEvent.click(watermelonButton);

  // Gets the price input
  const priceInput = screen.getByLabelText("Precio:");
  expect(priceInput).toHaveValue(0.93);
});

it.skip("should calculate the total", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks on the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  const calculateButton = screen.getByText("Calcular");
  userEvent.click(calculateButton);

  // Gets the total input
  const totalInput = screen.getByLabelText("Total:");
  expect(totalInput).toHaveValue(3.38);
});

it.skip("should see an error when you calculate the total without the price", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks on the calculate button
  userEvent.click(screen.getByText("Calcular"));

  expect(screen.getByText("Error")).toBeInTheDocument();
});

it.skip("should clear the error when select a fruit", () => {
  render(<App />);

  // Clicks on the calculate button
  userEvent.click(screen.getByText("Calcular"));
  // Clicks on the watermelon button
  userEvent.click(screen.getByLabelText("Sandía"));

  expect(screen.queryByText("Error")).not.toBeInTheDocument();
});

it.skip("should see an error if there is not weight", () => {
  render(<App />);

  // Clicks on the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  userEvent.click(screen.getByText("Calcular"));

  expect(screen.getByText("Error")).toBeInTheDocument();
});

it.skip("should clear the input values", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks on the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  const calculateButton = screen.getByText("Calcular");
  userEvent.click(calculateButton);
  // Clicks on the clean button
  const clearButton = screen.getByText("Limpiar");
  userEvent.click(clearButton);

  // Gets the total input
  const totalInput = screen.getByLabelText("Total:");
  expect(weightInput).toHaveValue(0);
  // Gets the price input
  const priceInput = screen.getByLabelText("Precio:");
  expect(priceInput).toHaveValue(0);
  expect(totalInput).toHaveValue(0);
});

it.skip("should add the last weighed price in the sidebar", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks on the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  const calculateButton = screen.getByText("Calcular");
  userEvent.click(calculateButton);

  // Gets the sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("3.38 €");
});

it.skip("should create a list with the weighed prices in the sidebar", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks on the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  const calculateButton = screen.getByText("Calcular");
  userEvent.click(calculateButton);
  // Weigh the watermelon
  userEvent.clear(weightInput);
  userEvent.type(weightInput, "4");
  // Clicks on the watermelon button
  const watermelonButton = screen.getByLabelText("Sandía");
  userEvent.click(watermelonButton);
  // Clicks on the calculate button
  userEvent.click(calculateButton);

  // Gets the sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("3.38 €");
  expect(sidebar).toHaveTextContent("3.72 €");
});

it.skip("should display the total price of all the weighed products", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  const calculateButton = screen.getByText("Calcular");
  userEvent.click(calculateButton);
  // Weigh the watermelon
  userEvent.clear(weightInput);
  userEvent.type(weightInput, "4");
  // Clicks on the watermelon button
  const watermelonButton = screen.getByLabelText("Sandía");
  userEvent.click(watermelonButton);
  // Clicks on the calculate button
  userEvent.click(calculateButton);

  // Gets the sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("3.38 €");
  expect(sidebar).toHaveTextContent("3.72 €");
  expect(sidebar).toHaveTextContent("Total - 7.1 €");
});

it.skip("should add the last weighed price in the sidebar", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks on the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  const calculateButton = screen.getByText("Calcular");
  userEvent.click(calculateButton);

  // Gets the sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("Plátano - 3.38 €");
});

it.skip("should create a list with the weighed products in the sidebar", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks on the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  const calculateButton = screen.getByText("Calcular");
  userEvent.click(calculateButton);
  // Weigh the watermelon
  userEvent.clear(weightInput);
  userEvent.type(weightInput, "4");
  // Clicks on the watermelon button
  const watermelonButton = screen.getByLabelText("Sandía");
  userEvent.click(watermelonButton);
  // Clicks on the calculate button
  userEvent.click(calculateButton);

  // Gets the sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("Plátano - 3.38 €");
  expect(sidebar).toHaveTextContent("Sandía - 3.72 €");
});

it.skip("should display the total price of all the weighed products", () => {
  render(<App />);

  // Weigh the banana
  const weightInput = screen.getByLabelText("Peso:");
  userEvent.type(weightInput, "2");
  // Clicks the banana button
  const bananaButton = screen.getByLabelText("Plátano");
  userEvent.click(bananaButton);
  // Clicks on the calculate button
  const calculateButton = screen.getByText("Calcular");
  userEvent.click(calculateButton);
  // Weigh the watermelon
  userEvent.clear(weightInput);
  userEvent.type(weightInput, "4");
  // Clicks on the watermelon button
  const watermelonButton = screen.getByLabelText("Sandía");
  userEvent.click(watermelonButton);
  // Clicks on the calculate button
  userEvent.click(calculateButton);

  // Gets the sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("Plátano - 3.38 €");
  expect(sidebar).toHaveTextContent("Sandía - 3.72 €");
  expect(sidebar).toHaveTextContent("Total - 7.1 €");
});

it.skip("should be able to clean the purchase", () => {

});
