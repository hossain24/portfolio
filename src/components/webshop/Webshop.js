import React, { Component } from "react";
import $ from "jquery";
import "./shopFunctions.js";
import "./webshop.css";

class Webshop extends Component {
    render() {
        var shoppingCart = {};
        shoppingCart.cart = [];

        shoppingCart.Item = function (name, price, count) {
            this.name = name;
            this.price = price;
            this.count = count;
        };

        shoppingCart.addItemToCart = function (name, price, count) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    this.cart[i].count += count;
                    this.saveCart();
                    return;
                }
            }
            var item = new shoppingCart.Item(name, price, count);
            this.cart.push(item);
            this.saveCart();
        };

        shoppingCart.setCountForItem = function (name, count) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    this.cart[i].count = count;
                    break;
                }
            }
            this.saveCart();
        };

        shoppingCart.removeItemFromCart = function (name) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    this.cart[i].count--;
                    if (this.cart[i].count === 0) {
                        this.cart.splice(i, 1);
                    }
                    break;
                }
            }
            this.saveCart();
        };

        shoppingCart.removeItemFromCartAll = function (name) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    this.cart.splice(i, 1);
                    break;
                }
            }
            this.saveCart();
        };

        shoppingCart.clearCart = function () {
            shoppingCart.cart = [];
            this.saveCart();
        };

        shoppingCart.totalItemCount = function () {
            var totalCount = 0;
            for (var i in this.cart) {
                totalCount += this.cart[i].count;
            }
            return totalCount;
        };

        shoppingCart.totalCostCount = function () {
            var totalCost = 0;
            for (var i in this.cart) {
                totalCost += this.cart[i].price * this.cart[i].count;
            }
            return totalCost.toFixed(2);
        };

        shoppingCart.listCart = function () {
            var cartCopy = [];
            for (var i in this.cart) {
                var item = this.cart[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                itemCopy.total = (itemCopy.price * itemCopy.count).toFixed(2);
                cartCopy.push(itemCopy);
            }
            return cartCopy;
        };

        shoppingCart.saveCart = function () {
            localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
        };

        shoppingCart.loadCart = function () {
            var cart = JSON.parse(localStorage.getItem("shoppingCart"));
        };

        shoppingCart.saveCart();
        shoppingCart.loadCart();

        $(".add-to-cart").click(function (event) {
            event.preventDefault();
            var name = $(this).attr("data-name");
            var price = Number($(this).attr("data-price"));
            shoppingCart.addItemToCart(name, price, 1);
            displayCart();
        });
        $("#clear-cart").click(function (event) {
            shoppingCart.clearCart();
            displayCart();
        });
        function displayCart() {
            var cartArray = shoppingCart.listCart();
            var output = "";
            for (var i in cartArray) {
                output += "<li>"
                    + cartArray[i].name + " "
                    + "<input class='item-count'type='number' data-name='"
                    + cartArray[i].name + "' value='"
                    + cartArray[i].count + "'></input>"
                    + cartArray[i].count + " X "
                    + cartArray[i].price + " = "
                    + cartArray[i].total
                    + "<button class='add-item' data-name='"
                    + cartArray[i].name + "'> + </button>"
                    + "<button class='subtract-item' data-name='"
                    + cartArray[i].name + "'> - </button>"
                    + "<button class='remove-item' data-name='"
                    + cartArray[i].name + "'>Remove</button>"
                    + "</li>"
            }
            $("#show-cart").html(output);
            $("#count-item").html(shoppingCart.totalItemCount());
            $("#total-cart").html(shoppingCart.totalCostCount());
        }
        $("#show-cart").on("click", ".add-item", function (event) {
            var name = $(this).attr("data-name");
            shoppingCart.addItemToCart(name, 0, 1);
            displayCart();
        });
        $("#show-cart").on("click", ".subtract-item", function (event) {
            var name = $(this).attr("data-name");
            shoppingCart.removeItemFromCart(name);
            displayCart();
        })
        $("#show-cart").on("click", ".remove-item", function (event) {
            var name = $(this).attr("data-name");
            shoppingCart.removeItemFromCartAll(name);
            displayCart();
        });
        $("#show-cart").on("change", ".item-count", function () {
            var name = $(this).attr("data-name");
            var count = Number($(this).val());
            shoppingCart.setCountForItem(name, count);
            displayCart();
        });

        return (
            <div className="shop-items container">
                <div className="post">
                    <ul>
                        <li><a class="add-to-cart" href="#" data-name="T-shirt" data-price="99.99">T-shirt DKK 99.99</a></li>
                        <li><a class="add-to-cart" href="#" data-name="Shirt" data-price="199.99">Shirt DKK 199.99</a></li>
                        <li><a class="add-to-cart" href="#" data-name="Jeans" data-price="399.99">Jeans DKK 399.99</a></li>
                        <li><a class="add-to-cart" href="#" data-name="Jacket" data-price="799.99">Jacket DKK 799.99</a></li>
                    </ul>
                    <button id="clear-cart">Clear Cart</button>
                </div>

                <div className="post">
                    <ul id="show-cart">
                    </ul>
                    <div>Total Number of Items: <span id="count-item"></span></div>
                    <div>Total Cost: DKK <span id="total-cart"></span></div>
                </div>

            </div>
        )

    }
}

export default Webshop;