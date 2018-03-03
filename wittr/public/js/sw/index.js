self.addEventListener('fetch', function (event) {
event.respondWith(
    new Response("I'm the new <span class='a-winner-is-me'>response</span>", {
        headers: {'Content-Type': 'text/html'}
    })
);


    console.log('hi user');
});