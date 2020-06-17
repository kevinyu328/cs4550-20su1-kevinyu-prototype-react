export const getNewNetflixReleaseInUs = () =>
    fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get-!1900%2C2020-!0%2C5-!5%2C10-!0-!Any-!Any-!Any-!gt10000-!%7Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
        "x-rapidapi-key": "d2b55fe19amshd7df61860c411c2p17fb05jsnf3a4336143f5"
      }
    })
    .then(response => response.json())


export const searchByFilters = (providers, genres) =>
  fetch(`https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/?Genres=${genres}&SortBy=IvaRating&ProgramTypes=Movie&Providers=${providers}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
      "x-rapidapi-key": "d2b55fe19amshd7df61860c411c2p17fb05jsnf3a4336143f5",
      "content-type": "application/json"
    }
  })
    .then(response => response.json())