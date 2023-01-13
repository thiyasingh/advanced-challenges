/*Q1 
function showRating(rating) {
    let stars = ""
    for (let i = 0; i < Math.floor(rating); ++i) {
        stars = stars + "*"
        if (i < Math.floor(rating) - 1) {
            stars = stars + " "
        }

    }
    if (rating - Math.floor(rating) === 0.5) {
        stars = stars + " ."
    }
    return stars
}
console.log(showRating(4))*/

/*Q2 
function sortLowToHigh(arr)
{
    return arr.sort((a, b) => b.price - a.price) // sort function on its own sorts alphabetically, this is how to sort numbers. use b-a to go from highest to lowest.
}

console.log (sortLowToHigh([{id:1, price: 43 }, {id:2, price: 876}, {id: 3, price:1}]))*/

/*Q5 - PROMISES 
async function getPost (uID)
{
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json()
    const posts = result.filter(elem => elem.userId === uID)
    console.log(posts)
}

getPost(5);*/

/*Q6 - PROMISES */
async function firstSixIncomplete ()
{
    let incomplete = []
    const promise = fetch ("https://jsonplaceholder.typicode.com/todos")
    const result = await (await promise).json()
    const list = result.filter (elem => elem.completed === false).slice(0,6)
    console.log (list)
}

firstSixIncomplete();