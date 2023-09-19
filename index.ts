console.log("Hello via Bun!");

let port = 8000;
const server = Bun.serve({
    port,
    fetch(req){
        return new Response("Hello again Tom")
    }

})
console.log(`Server started on port ${port}`);