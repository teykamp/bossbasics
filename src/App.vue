<template>
  <FourPhasesIntro />
  <div class="my-24"></div>
  <PhaseCard 
    v-for="card in phaseCards"
    :key="card.index"
    :data="card"
    class="fade-down"
  />
</template>

<script setup>
import FourPhasesIntro from './components/FourPhasesIntro.vue'
import PhaseCard from './components/PhaseCard.vue'

const phaseCards = [
  {
    index: 1,
    timeRange: 'Month 1',
    title: 'Intake and Goal Setting',
    body: 'Upon intake and assessment, participants begin the process of adjusting to the program’s expectations and goal-setting objectives as they enter this life-altering phase. Empowerment coaches work closely with all participants, providing orientation and needs-assessment, and designing individualized success plans.',
    image: 'https://assets-global.website-files.com/6531113286dd621a94d56c59/6554e28403334c2bcc97780f_steps_boss.jpg',
  },
  {
    index: 2,
    timeRange: 'Months 2-4',
    title: 'Career Training',
    body: 'Participants are introduced to career opportunities and training while further developing peer-to-peer journeymen skills. The Boss Crew endeavor to beautify the streets of our Queen City/Manchester. Through stipend initiatives, participants have opportunities to improve the city streets, parks, and sidewalks, taking pride in a community that believes in them.',
    image: 'https://assets-global.website-files.com/6531113286dd621a94d56c59/65451d4174ea75f254fb8380_pulaski_park.jpg',
  },
  {
    index: 3,
    timeRange: 'Months 5-8',
    title: 'Workforce Transition',
    body: 'Participants select career paths based on individual interests, ambitions, and abilities. After completing the Boss Crew work program, participants begin the transition into workforce opportunities. The Boss Crew develop their resumes and prepare for job interviews.',
    image: 'https://assets-global.website-files.com/6531113286dd621a94d56c59/6554e48351db774bed51ecb7_boss_job_key.jpg',
  },
  {
    index: 4,
    timeRange: 'Months 9-12',
    title: 'Extended Support',
    body: 'The B.O.S.S. crew works closely with housing specialists and empowerment coaches to secure full-time employment and permanent housing. B.O.S.S maintains ongoing contact with graduates, providing extended career development, employment opportunities, and higher education support to those who need it.',
    image: 'https://assets-global.website-files.com/6531113286dd621a94d56c59/6554e2200ad3304594ff3ab5_hardhats_boss.jpg',
  },
  {} // tmp fix for 4th element not animating properly
]
</script>
