let port = Bun.env.PORT || 8080;
const server = Bun.serve({
    port,
    fetch(req){
        return new Response("Hello again Tom")
    }

})

console.log(`Server started on port ${port}`);