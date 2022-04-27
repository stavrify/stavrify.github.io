
function pageTransition() {
    
    var tl = gsap.timeline();

    tl.to('ul.transition li', {duration: .4, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('ul.transition li', {duration: .4, scaleY: 0, transformOrigin: "bottom left", delay: .1})
}

function contentAnimation() {
    
    var tl = gsap.timeline();
    tl.from('h1', { duration: 1.4, translateY: -500, opacity: 0})
    tl.to('.center', { transform:"rotateX(0deg)"}, "-=1")
    
}

function afterdiv() {

    var tl = gsap.timeline();
    tl.from('.navy', {duration: .1, translateY: 300,opacity: 0, stagger: .1})
    tl.to('.navy', {translateY: 0,opacity: 1, stagger: .1})

}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}


barba.init({

    sync: true,

    transitions: [{

        async leave(data) {

            const done = this.async();

            pageTransition();
            await delay(1150);
            done();
        },

        async enter(data) {
            contentAnimation();
        },

        async afterEnter(data){
            afterdiv();
        },

        async once(data) {
            contentAnimation();
        },

        async afterOnce(data) {
            afterdiv();
        }
    }]
})