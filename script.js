let currentSection = 0;
        const sections = ['landing', 'section1', 'section2', 'section3', 'section4', 'section5'];
        let autoAdvanceTimer = null;

        function startJourney() {
            showNextSection();
            createHearts();
        }

        function showNextSection() {

            if (autoAdvanceTimer) {
                clearTimeout(autoAdvanceTimer);
            }
            
            if (currentSection < sections.length - 1) {
                document.getElementById(sections[currentSection]).classList.add('hidden');
                currentSection++;
                const nextSection = document.getElementById(sections[currentSection]);
                nextSection.classList.remove('hidden');
                

                setTimeout(() => {
                    const contentBox = nextSection.querySelector('.content-box');
                    if (contentBox) {
                        contentBox.classList.add('visible');
                    }
                    

                    const loveCards = nextSection.querySelectorAll('.love-card');
                    loveCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });
                }, 100);


                if (currentSection !== 4 && currentSection !== sections.length - 1) {
                    autoAdvanceTimer = setTimeout(showNextSection, 30000); // 30 seconds
                }
            }
        }

        function openGift() {
            const giftBox = document.getElementById('giftBox');
            const giftContent = document.getElementById('giftContent');
            
            giftBox.style.transform = 'scale(0) rotate(180deg)';
            giftBox.style.opacity = '0';
            
            setTimeout(() => {
                giftBox.style.display = 'none';
                giftContent.classList.add('show');
                setTimeout(showNextSection, 5000);
            }, 500);
        }

        function createHearts() {
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '💖';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, 2000);
        }


        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.landing::before');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });


        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.innerHTML = '✨';
                    sparkle.style.position = 'absolute';
                    sparkle.style.left = Math.random() * 100 + '%';
                    sparkle.style.top = Math.random() * 100 + '%';
                    sparkle.style.fontSize = '1rem';
                    sparkle.style.opacity = '0.7';
                    sparkle.style.animation = 'sparkle 2s ease-in-out infinite';
                    sparkle.style.pointerEvents = 'none';
                    document.querySelector('.landing').appendChild(sparkle);
                    
                    setTimeout(() => {
                        sparkle.remove();
                    }, 3000);
                }, i * 100);
            }
        }, 1000);

        document.addEventListener('DOMContentLoaded', function() {

            const backgroundMusic = document.getElementById('backgroundMusic');
            


            document.addEventListener('click', function() {
                if(backgroundMusic && backgroundMusic.paused) {
                    backgroundMusic.play()
                        .catch(error => {
                            console.log("Audio playback error:", error);
                        });
                }
            }, { once: true });
            

            initButtons();
        });


        function initButtons() {

            const nextButtons = document.querySelectorAll('.next-button');
            nextButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    showNextSection();
                });
            });
        }
