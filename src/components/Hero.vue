<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="head text-sm">Bundle with any hulu plan and save</div>
      <div>
        <img
          src="../assets/partners.png"
          alt="partner-logos"
          class="p-img"
          width="600"
        />
      </div>
      <div>
        <p class="text">
          Get endless entertainment, live sports, and the shows and movies you
          love.
        </p>
      </div>
      <div class="button">
        <button class="uppercase">get the disney bundle</button>
      </div>
      <div>
        <div class="link">
          <span class="font-semibold underline"> What's included? </span>
          <span> See <span class="underline">Bundle Terms</span> </span>
        </div>
        <div class="cta-text">Sign up for hulu only</div>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("../assets/hulu-bg.jpeg"),
    linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%);
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
}

.container {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

.head {
  font-family: "Graphik Bold";
  text-align: center;
  text-transform: uppercase;
  color: #00ed82;
  margin-bottom: 20px;
}

.text {
  font-family: "Graphik Bold";
  color: white;
  font-size: 22px;
  margin-top: 16px;
  text-align: center;
  line-height: 30px;
}

.button {
  padding-top: 30px;
  text-align: center;
}

.button button {
  font-family: "Arial";
  font-weight: 900;
  background-color: white;
  color: #040505;
  width: 280px;
  padding: 10px 20px;
  height: 60px;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.button button:hover {
  opacity: 0.8;
}

.link {
  color: white;
  font-size: 12px;
  opacity: 0.6;
}

.cta-text {
  margin-top: 15px;
  color: white;
  text-decoration: underline;
  font-size: 16px;
}
</style>
