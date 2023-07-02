import axios from "axios";

const Axios = axios.create({
  // baseURL: "https://localhost:7055/api/Game/",
  baseURL: "https://blackjack-backend-ido.azurewebsites.net/api/Game/",
  headers: {
    Accept: "*/*",
    Connection: "keep-alive",
  },
});

// Starting new game
export const startNewGame = async () => {
  try {
    const response = await Axios.post("start-new-game", {});
    return response;
  } catch (error) {
    console.error("Error starting game:", error);
  }
};

// Ending the game
export const endGame = async () => {
  try {
    const response = await Axios.post("end-game", {});
    return response;
  } catch (error) {
    console.log("Error dealer play:", error);
  }
};

// Player hits
export const playerHit = async () => {
  try {
    const response = await Axios.post("hit", {});
    return response;
  } catch (error) {
    console.error("Error in player hit:", error);
  }
};

// Player stands
export const playerStand = async () => {
  try {
    const response = await Axios.post("stand", {});
    return response;
  } catch (error) {
    console.error("Error in player stand:", error);
  }
};

// Dealer playes
export const dealerPlay = async () => {
  try {
    const response = await Axios.post("dealer-play", {});
    return response;
  } catch (error) {
    console.log("Error in dealer play:", error);
  }
};

// Checking if player busts
export const checkPlayerBust = async () => {
  try {
    const response = await Axios.get("player-bust");
    return response;
  } catch (error) {
    console.error("Error checking player bust:", error);
  }
};

// Checking player hand
export const checkPlayerHand = async () => {
  try {
    const response = await Axios.get("check-player-hand");
    return response;
  } catch (error) {
    console.log("Error dealer play:", error);
  }
};

// Checking dealer hand
export const checkDealerHand = async () => {
  try {
    const response = await Axios.get("check-dealer-hand");
    return response;
  } catch (error) {
    console.log("Error dealer play:", error);
  }
};
