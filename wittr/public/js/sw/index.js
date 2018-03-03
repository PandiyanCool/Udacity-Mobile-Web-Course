self.addEventListener('fetch', function (event) {
    /* Hijacking requests */

    // Respond with a html content type

    // event.respondWith(
    //     new Response("I'm the new <span class='a-winner-is-me'>response</span>", {
    //         headers: {'Content-Type': 'text/html'}
    //     })
    // );

    // console.log('event.request');

    // Respond with gif on custom URL

    // if (event.request.url.endsWith('.jpg')) {
    //     event.respondWith(
    //         fetch('/imgs/dr-evil.gif')
    //     );
    // }


    // respond on http status

    event.respondWith(
        fetch(event.request).then(function (response) {
            if (response.status === 404) {

                // return new Response('Something went wrong');

                return fetch('/imgs/dr-evil.gif');
            }
            return response;
        }).catch(function () {
            return new Response('System is completely down, take a break!');
        })
    )
});