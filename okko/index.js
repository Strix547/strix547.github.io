const dayTimeSwitch = () => {
  const themeSwitch = document.querySelector('#theme-switch')

  themeSwitch.addEventListener('click', ({ currentTarget }) => {
    currentTarget.classList.toggle('night')
  })
}

const meetupsSlider = () => {
  const meetups = [
    {
      title: 'Александра Невского',
      times: ['до 2:20', '2:30 - 5:05', 'c 5:10']
    },
    {
      title: 'Дворцовая площадь',
      times: ['до 2:10', '2:20 - 5:15', 'c 5:00']
    },
    {
      title: 'Улица Некрасова',
      times: ['до 2:25', '2:30 - 5:25', 'c 5:20']
    }
  ]

  const meetupBox = document.querySelector('.meetups')
  const meetupBtnPrev = meetupBox.querySelector('#meetup-prev')
  const meetupBtnNext = meetupBox.querySelector('#meetup-next')

  let meetupIdx = 0

  const displayMeetup = (meetups, idx) => {
    const title = meetupBox.querySelector('h3')
    const times = meetupBox.querySelector('.time')

    title.innerHTML = meetups[idx].title
    times.children[0].innerHTML = meetups[idx].times[0]
    times.children[1].innerHTML = meetups[idx].times[1]
    times.children[2].innerHTML = meetups[idx].times[2]
  }

  meetupBtnPrev.addEventListener('click', () => {
    if (meetupIdx !== 0) {
      meetupIdx = meetupIdx - 1
      displayMeetup(meetups, meetupIdx)
    }
  })

  meetupBtnNext.addEventListener('click', () => {
    if (meetupIdx !== 2) {
      meetupIdx = meetupIdx + 1
      displayMeetup(meetups, meetupIdx)
    }
  })
}

const donutsSoldByTimeRange = () => {
  let currentTime = 'day'
  const timeRanges = document.querySelector('.donuts-sold .time-range-switch')
  const count = document.querySelector('.donuts-sold .count')

  const counts = {
    day: 15,
    week: 112,
    month: 515
  }

  timeRanges.addEventListener('click', ({ target }) => {
    const day = timeRanges.querySelector('.day')
    const week = timeRanges.querySelector('.week')
    const month = timeRanges.querySelector('.month')

    day.classList.remove('selected')
    week.classList.remove('selected')
    month.classList.remove('selected')

    target.classList.add('selected')

    if (target.classList.contains('day')) {
      currentTime = 'day'
    }

    if (target.classList.contains('week')) {
      currentTime = 'week'
    }

    if (target.classList.contains('month')) {
      currentTime = 'month'
    }

    count.innerHTML = counts[currentTime]
  })
}

const factsSwitch = () => {
  const factsBox = document.querySelector('.facts')
  const factTitle = factsBox.querySelector('.fact-top')
  const factDesc = factsBox.querySelector('.fact-desc')
  const anotherFactBtn = factsBox.querySelector('.another-fact')
  let factCounter = 0

  const facts = [
    { title: 'Питер лучше москвы', desc: 'Меньше людей' },
    { title: 'Дата основания', desc: '27 мая 1703 года' },
    { title: 'Город белых ночей', desc: 'Самый северный из крупных мегаполисов мира' }
  ]

  anotherFactBtn.addEventListener('click', () => {
    if (factCounter === facts.length - 1) {
      factCounter = 0
    }

    factCounter = factCounter + 1

    factTitle.innerHTML = facts[factCounter].title
    factDesc.innerHTML = facts[factCounter].desc
  })
}

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

if (window.screen.width >= 1300) {
  const sidebar = new StickySidebar('#main .wrapper > .left', {
    topSpacing: 114,
    innerWrapperSelector: '.inner-wrapper-sticky'
  })
}

dayTimeSwitch()
meetupsSlider()
donutsSoldByTimeRange()
factsSwitch()
