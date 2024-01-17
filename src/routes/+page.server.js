export const load = async (event) => {
    const context = event;
    console.log(context); // shows up in your functions log in the Netlify app
   return {
        'foo': 'bar',
    }
}
