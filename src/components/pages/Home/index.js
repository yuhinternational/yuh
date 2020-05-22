/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../../css/mystyles.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.bruh.bind(this.bruh)
  }
  
  bruh(e) {
    console.log('nice')
  }

  render() {
    return (
      <div>
        <div class="parllax"></div>

        <div className="grid">
          <h6 className="header-text has-text-danger"  onClick={this.bruh}>
            <b>From the Lunch Pass to Developing Games</b>
          </h6>

          <p className="is-size-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit
            amet venenatis urna cursus eget nunc scelerisque. Consectetur libero
            id faucibus nisl tincidunt eget. Ut sem viverra aliquet eget sit
            amet tellus. Ut ornare lectus sit amet. Dui sapien eget mi proin
            sed. Auctor urna nunc id cursus metus aliquam eleifend mi. Varius
            morbi enim nunc faucibus. Est lorem ipsum dolor sit amet. Porttitor
            eget dolor morbi non arcu. Bibendum arcu vitae elementum curabitur
            vitae nunc sed velit dignissim. Nec nam aliquam sem et tortor
            consequat id porta. In dictum non consectetur a erat. Tellus orci ac
            auctor augue mauris. Ante in nibh mauris cursus mattis.
          </p>

          <br></br>
          <p className="is-size-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit
            amet venenatis urna cursus eget nunc scelerisque. Consectetur libero
            id faucibus nisl tincidunt eget. Ut sem viverra aliquet eget sit
            amet tellus. Ut ornare lectus sit amet. Dui sapien eget mi proin
            sed. Auctor urna nunc id cursus metus aliquam eleifend mi. Varius
            morbi enim nunc faucibus. Est lorem ipsum dolor sit amet. Porttitor
            eget dolor morbi non arcu. Bibendum arcu vitae elementum curabitur
            vitae nunc sed velit dignissim. Nec nam aliquam sem et tortor
            consequat id porta. In dictum non consectetur a erat. Tellus orci ac
            auctor augue mauris. Ante in nibh mauris cursus mattis.
          </p>
        </div>
        <br></br>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Helping Industry Giants Like Cal Combs</h1>
              <h2 className="subtitle">You're in good hands.</h2>
            </div>
          </div>
        </section>
        <div className="grid">
          <p className="is-size-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit
            amet venenatis urna cursus eget nunc scelerisque. Consectetur libero
            id faucibus nisl tincidunt eget. Ut sem viverra aliquet eget sit
            amet tellus. Ut ornare lectus sit amet. Dui sapien eget mi proin
            sed. Auctor urna nunc id cursus metus aliquam eleifend mi. Varius
            morbi enim nunc faucibus. Est lorem ipsum dolor sit amet. Porttitor
            eget dolor morbi non arcu. Bibendum arcu vitae elementum curabitur
            vitae nunc sed velit dignissim. Nec nam aliquam sem et tortor
            consequat id porta. In dictum non consectetur a erat. Tellus orci ac
            auctor augue mauris. Ante in nibh mauris cursus mattis.
          </p>
        </div>
      </div>
    );
  }
}
