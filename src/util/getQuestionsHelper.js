const getQuestions = async (difficulty) => {
  try {
    const rawResponse = await fetch(`https://opentdb.com/api.php?amount=15&difficulty=${difficulty}&type=multiple&encode=urlLegacy`);
    const response = await rawResponse.json();
    console.log(response.results);
    return response.results;
  } catch(e) {
    console.log(e.message);
  } 
};

export { getQuestions };