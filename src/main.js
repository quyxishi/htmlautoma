const magicStyle = `<style>.magic_button::after,.magic_button::before{transform:translate(-50%,-50%);height:100%;content:"";width:100%}.magic_button{--black-700:hsla(0 0% 12% / 1);--border_radius:9999px;--transtion:0.3s ease-in-out;--offset:2px;cursor:pointer;position:relative;display:flex;align-items:center;gap:.5rem;transform-origin:center;padding:1.3rem 2.3rem;background-color:transparent;border:none;border-radius:var(--border_radius);transform:scale(calc(1 + (var(--active,0) * .07)));transition:transform var(--transtion)}.magic_button .dots_border,.magic_button::after,.magic_button::before{top:50%;border-radius:var(--border_radius);position:absolute;left:50%}.magic_button::before{background-color:var(--black-700);box-shadow:inset 0 .5px #fff,inset 0 -1px 2px 0 #000,0 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active,0))),0 0 0 calc(var(--active,0) * .375rem) hsl(260 97% 50% / .75);transition:all var(--transtion);z-index:0}.magic_button::after{background-color:hsla(260 97% 61% / .75);background-image:radial-gradient(at 51% 89%,#b89eda 0,transparent 50%),radial-gradient(at 100% 100%,#9474bd 0,transparent 50%),radial-gradient(at 22% 91%,#9474bd 0,transparent 50%);background-position:top;opacity:var(--active, 0);transition:opacity var(--transtion);z-index:2}.magic_button:is(:hover,:focus-visible){--active:1}.magic_button:active{transform:scale(1)}.magic_button.magic_hovered{--active:1}.magic_button .dots_border{--size_border:calc(100% + 2px);overflow:hidden;transform:translate(-50%,-50%);width:var(--size_border);height:var(--size_border);background-color:transparent;z-index:-10}.magic_button .dots_border::before{content:"";position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);transform-origin:left;transform:rotate(0);width:100%;height:2rem;background-color:#fff;mask:linear-gradient(transparent 0%,white 120%);animation:2s linear infinite rotate}@keyframes rotate{to{transform:rotate(360deg)}}.magic_button .sparkle{position:relative;z-index:10;width:2.05rem}.magic_button .sparkle .magic_path{fill:currentColor;stroke:currentColor;transform-origin:center;color:#fff}.sparkle .magic_path{animation:1.5s linear .5s infinite magic_path}.magic_button .sparkle .magic_path:first-child{--scale_path_1:1.2}.magic_button .sparkle .magic_path:nth-child(2){--scale_path_2:1.2}.magic_button .sparkle .magic_path:nth-child(3){--scale_path_3:1.2}@keyframes magic_path{0%,100%,34%,71%{transform:scale(1)}17%{transform:scale(var(--scale_path_1,1))}49%{transform:scale(var(--scale_path_2,1))}83%{transform:scale(var(--scale_path_3,1))}}.magic_button .magic_text{position:relative;z-index:10;background-image:linear-gradient(90deg,hsla(0 0% 100% / 1) 0,hsla(0 0% 100% / var(--active,0)) 200%);background-clip:text;line-height:normal;color:transparent}</style>`;
const magicButtonPractical = `<button class=magic_button style=margin-bottom:15px><div class=dots_border></div><svg class=sparkle fill=none viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path class=magic_path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path><path class=magic_path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path><path class=magic_path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path></svg> <span class=magic_text>Решить модуль</span></button>`;
const magicButtonTheoretical = `<button class=magic_button style=margin-top:15px><div class=dots_border></div><svg class=sparkle fill=none viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path class=magic_path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path><path class=magic_path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path><path class=magic_path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path></svg> <span class=magic_text>Решить теорию</span></button>`;

function solvePracticalSubModule() {
    const solveButton = document.querySelector('button.magic_button');
    const solveText = solveButton.querySelector('span.magic_text');

    solveButton.disabled = true;
    solveButton.classList.add('magic_hovered');
    solveText.textContent = '0%';

    const unsolvedTasks = document.querySelectorAll(
        'div.chapter-tasks__item:not(.chapter-tasks__item--active) a.chapter-tasks__link'
    );

    var solvedCounter = 0;

    const tasksPromises = Array.from(unsolvedTasks).map((taskItem, index) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                taskItem.style.backgroundColor = '#f8f8f8';

                let taskUrl =
                    window.location.origin + taskItem.getAttribute('href');

                fetch(taskUrl, {
                    method: 'GET',
                    credentials: 'include',
                    mode: 'cors',
                    headers: {
                        Accept: '*/*',
                        'Accept-Language': 'en-US,ru;q=0.7,en;q=0.3',
                        'Sec-Fetch-Dest': 'empty',
                        'Sec-Fetch-Mode': 'cors',
                        'Sec-Fetch-Site': 'same-origin',
                        Priority: 'u=0',
                        'User-Agent': navigator.userAgent,
                    },
                    referrer: window.location.href,
                })
                    .then((response) => response.text())
                    .then((html) => {
                        const csrfTokenMatch = html.match(
                            /<meta name="csrf-token" content="([^"]+)"/
                        );
                        const taskIdMatch = html.match(
                            /<article[^>]*data-taskid=["']([^"']+)["']/i
                        );

                        if (csrfTokenMatch && csrfTokenMatch[1]) {
                            var csrfToken = csrfTokenMatch[1];
                            console.log('CSRF Token:', csrfToken);
                        } else {
                            console.log('CSRF token not found in response');
                            return;
                        }

                        if (taskIdMatch && taskIdMatch[1]) {
                            var taskId = taskIdMatch[1];
                            console.log('Task ID:', taskId);
                        } else {
                            console.log(
                                "Task ID not found in response, probably it's an theory task, marking as completed"
                            );
                            return;
                        }

                        fetch(taskUrl, {
                            method: 'POST',
                            credentials: 'include',
                            mode: 'cors',
                            headers: {
                                Accept: '*/*',
                                'Accept-Language': 'en-US,ru;q=0.7,en;q=0.3',
                                'X-Requested-With': 'XMLHttpRequest',
                                'Content-Type':
                                    'application/x-www-form-urlencoded',
                                'Sec-Fetch-Dest': 'empty',
                                'Sec-Fetch-Mode': 'cors',
                                'Sec-Fetch-Site': 'same-origin',
                                Priority: 'u=0',
                                'User-Agent': navigator.userAgent,
                            },
                            referrer: window.location.href,
                            body: `token=${csrfToken}&task_id=${taskId}&completed=1&is_answering_triggered=false`,
                        })
                            .then((response) => {
                                console.log(
                                    `Solved task at: ${taskUrl} -> ${response.status}`
                                );
                            })
                            .catch((error) =>
                                console.error('Error at submitting:', error)
                            );
                    })
                    .catch((error) =>
                        console.error('Error at fetching:', error)
                    )
                    .finally(() => {
                        solvedCounter++;
                        solveText.textContent = `${parseFloat(
                            (solvedCounter / unsolvedTasks.length) * 100
                        ).toFixed(0)}%`;

                        taskItem.parentElement.classList.add(
                            'chapter-tasks__item--active'
                        );
                        taskItem.style.backgroundColor = '';

                        resolve();
                    });
            }, 250 * index);
        });
    });

    Promise.all(tasksPromises).then(() => {
        solveButton.disabled = false;
        solveButton.classList.remove('magic_hovered');
        solveText.textContent = 'Решить модуль';
        console.log('All tasks completed');
    });
}

function solveTheorySubModule() {
    const solveButton = document.querySelector('button.magic_button');
    const solveText = solveButton.querySelector('span.magic_text');

    solveButton.disabled = true;
    solveButton.classList.add('magic_hovered');
    solveText.textContent = '0%';

    const unsolvedTasks = document.querySelectorAll(
        'div.tree__item:not(.tree__item--done) div.tree__item-wrap a.tree__link'
    );

    var solvedCounter = 0;

    const tasksPromises = Array.from(unsolvedTasks).map((taskItem, index) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let taskSolveUrl =
                    window.location.origin +
                    taskItem.getAttribute('href') +
                    '/complete';

                let taskSolveMethod = taskSolveUrl.includes('demos')
                    ? 'GET'
                    : 'POST';

                if (taskSolveUrl.includes('tasks')) {
                    console.error(
                        'Test-like tasks not supported at this moment'
                    );
                    return;
                }

                fetch(taskSolveUrl, {
                    method: taskSolveMethod,
                    credentials: 'include',
                    mode: 'cors',
                    headers: {
                        Accept: '*/*',
                        'Accept-Language': 'en-US,ru;q=0.7,en;q=0.3',
                        'Sec-Fetch-Dest': 'empty',
                        'Sec-Fetch-Mode': 'cors',
                        'Sec-Fetch-Site': 'same-origin',
                        Priority: 'u=0',
                        'User-Agent': navigator.userAgent,
                    },
                    referrer: window.location.href,
                })
                    .then((response) => {
                        console.log(
                            `Solved theory/demo task at: ${taskSolveUrl} -> ${response.status}`
                        );
                    })
                    .catch((error) =>
                        console.error('Error at submitting:', error)
                    )
                    .finally(() => {
                        solvedCounter++;
                        solveText.textContent = `${parseFloat(
                            (solvedCounter / unsolvedTasks.length) * 100
                        ).toFixed(0)}%`;

                        taskItem.parentElement.parentElement.classList.add(
                            'tree__item--done'
                        );

                        resolve();
                    });
            }, 250 * index);
        });
    });

    Promise.all(tasksPromises).then(() => {
        solveButton.disabled = false;
        solveButton.classList.remove('magic_hovered');
        solveText.textContent = 'Решить теорию';
        console.log('All theory/demo tasks completed');
    });
}

function main() {
    if (document.querySelector('button.magic_button')) return;

    const isPracticalSubModule =
        /^https:\/\/up\.htmlacademy\.ru\/univer-web-dev-start\/\d+?\/module\/\d+?\/item\/\d+?$/.test(
            window.location.href
        );

    const isTheorySubModule =
        /^https:\/\/up\.htmlacademy\.ru\/univer-web-dev-start\/\d+?\/module\/\d+?$/.test(
            window.location.href
        );

    if (isPracticalSubModule) {
        const continueButton = document.querySelector(
            'div.chapter-description__content p a.button.button--green'
        );
        if (!continueButton) return;

        const container = continueButton.parentElement;
        continueButton.remove();

        document.head.insertAdjacentHTML('beforeend', magicStyle);
        container.insertAdjacentHTML('beforeend', magicButtonPractical);

        const button = document.querySelector('button.magic_button');

        button.addEventListener('click', () => solvePracticalSubModule());
    } else if (isTheorySubModule) {
        const abstractParagraph = document.querySelector(
            'section.up-interface__left-col > p'
        );
        if (!abstractParagraph) return;

        document.head.insertAdjacentHTML('beforeend', magicStyle);
        abstractParagraph.insertAdjacentHTML(
            'beforeend',
            magicButtonTheoretical
        );

        const button = document.querySelector('button.magic_button');

        button.addEventListener('click', () => solveTheorySubModule());
    }
}
