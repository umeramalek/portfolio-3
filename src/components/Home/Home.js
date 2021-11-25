import React from 'react'

function Home() {
    return (
        <section className="company-heading intro-type" id="parallax-one">
  <div class="container">
    <div class="row product-title-info">
      <div class="col-md-12">
        <h1>DATA. DATA. DATA.</h1>
        <a class="ct-btn-scroll ct-js-btn-scroll" href="#section2"><img alt="Arrow Down Icon" src="https://www.solodev.com/assets/anchor/arrow-down.png"></a>
      </div>
    </div>
  </div>
  <div class="parallax" id="parallax-cta" style="background-image:url(https://www.solodev.com/assets/anchor/company-hero2.jpg);"></div>
</section>
<div class="main">
  <section id="section2">
    <div class="container jumbo">
      <div class="jumbotron">
        <h2>Let Big Data Change the Game</h2>
        <p>WebCorpCo is all about making sure your marketing stack is in alignment with your company as well as the customers you serve. There is no 'one size fits all' approach to marketing. Every business is unique, customers are unique, and your marketing should be as well.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    </div>
  </section>
</div>
    )
}

export default Home
