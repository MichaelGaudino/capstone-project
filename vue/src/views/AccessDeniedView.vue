<template>
  <div>
    <p>
      YOU CAN'T BE HERE, YA JAG!
    </p>
  </div>


</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* Style the header */
.header {
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

.loading-message {
  margin-top: 20px;
  font-style: italic;
  color: darkkhaki;
}

h3 {
  font-weight: bold;
  text-decoration-line: underline;
}

h2 {
  color: #093708;
}

/* .league-organizer-link {
  color: #093708;
  justify-self: center;
  padding: 2rem;
}

.league-organizer-link:hover {
  color: #116110;
  text-decoration-line: underline;
} */

/* Container for flexboxes */
.row {
  display: -webkit-flex;
  display: flex;
  padding: 10px;
  height: 75%;
}

/* Left and right column */
.right-column {
   -webkit-flex: 1;
   -ms-flex: 1;
   flex: 1.25;
   border-radius: 15px;
   margin: .5rem;
   background-color: darkkhaki;
   opacity: .9;
   padding: 1rem;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-grow: 1;
}

.left-column {
   -webkit-flex: 1;
   -ms-flex: 1;
   flex: .75;
   border-radius: 15px;
   margin: .5rem;
   background-color: darkkhaki;
   opacity: .9;
   padding: 1rem;
   height: auto;
   overflow: scroll;
}

/* Middle column */
.center-column {
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
  border-radius: 15px;
  margin: .5rem;
  background-color: #093708;
  opacity: .9;
  color: darkkhaki;
  padding: 1rem;
  height: auto;
  overflow: scroll;
}

.left-column::-webkit-scrollbar,
.center-column::-webkit-scrollbar {
  width: 15px;
}
.left-column::-webkit-scrollbar-thumb {
  background-color: darkkhaki;
}
.center-column::-webkit-scrollbar-thumb {
  background-color: #093708;
  border-radius: 4px;
}
.left-column::-webkit-scrollbar-corner,
.center-column::-webkit-scrollbar-corner {
  display: none;
}


.leaderboard-title {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

/* Style the footer */
/* .footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
} */

.home-container {
  background-image: url("../assets/goldenGolf.jpeg");
  background-color: #312917;
  height: 100vh;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  font-family: 'Hedvig Letters Serif', serif;
  color: #093708;
  font-weight: 600;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .row {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
}
</style>