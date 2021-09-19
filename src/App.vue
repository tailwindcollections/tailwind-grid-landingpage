<template>
  <div class="w-full min-h-screen font-sans bg-gray-900">
    <div class="grid w-full grid-cols-8 pb-24">
      <div class="col-start-2 py-10 place-items-center">
        <a
          href="#"
          class="flex items-center justify-center w-12 h-12 text-xl text-gray-900 bg-white rounded-full"
        >
          C
        </a>
      </div>
      <ul class="grid items-center grid-cols-4 col-span-4 col-start-4">
        <li v-for="item in menu">
          <a href="#" class="text-[13px] uppercase tracking-widest text-white/80">
            {{ item }}
          </a>
        </li>
      </ul>
      <div class="col-span-5 col-start-2 row-span-3 py-24">
        <span
          class="pl-5 text-[13px] text-white/50 font-medium tracking-widest uppercase border-l border-white/50"
        >
          Featured Class
        </span>
        <div class="mt-3 text-[110px] text-white font-medium leading-none">
          The role of <br />
          User Interface Designer
        </div>
      </div>
      <div class="relative col-start-7 row-start-4">
        <img
          class="absolute top-0 right-0 w-24 translate-x-1/2 -translate-y-1/2"
          src="/img/dots.svg"
          alt=""
        />
        <div
          class="flex flex-col justify-between px-7 py-8 text-gray-900 bg-[#FEBE02] aspect-1/1"
        >
          <ArrowRightIcon class="w-5 h-5" />
          <span class="text-2xl font-semibold">Join The Class</span>
        </div>
      </div>
      <div class="relative col-start-2 col-end-4 row-span-2 aspect-1/1">
        <img
          class="absolute left-0 -translate-x-1/2 bottom-24"
          src="/img/dots.svg"
          alt=""
        />
        <img class="relative" src="/img/avatar-1.png" alt="" />
      </div>
      <div class="col-span-2 col-start-5">
        <div
          class="pl-5 text-white text-[15px] leading-relaxed tracking-widest uppercase border-l border-white"
        >
          About
        </div>
        <p class="pt-2 pl-5 text-[13px] text-white/50 leading-extra-loose">
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in
        </p>
      </div>
      <div class="col-start-8">
        <div class="bg-[#353535] aspect-1/1" />
      </div>
      <div class="col-start-5 aspect-1/1">
        <img src="/img/avatar-2.png" alt="" />
      </div>
      <div class="col-span-2 col-start-6">
        <div class="bg-[#353535] grid place-items-center aspect-2/1 relative">
          <img src="/img/audio.svg" alt="" />
          <div
            class="absolute bottom-0 right-0 grid w-12 h-12 text-white bg-blue-600 cursor-pointer place-items-center"
          >
            <PlayIcon class="w-3 h-3 fill-current" />
          </div>
        </div>
      </div>
      <div class="col-start-2">
        <div class="pt-3 text-xl font-normal leading-loose text-white">Karen William</div>
        <div class="text-[13px] text-white/50 leading-loose">Senior Designer</div>
      </div>
      <div class="col-start-4">
        <div class="relative aspect-1/1">
          <img src="/img/avatar-3.png" alt="" />
          <div
            class="absolute bottom-0 right-0 grid w-12 h-12 text-gray-900 transition-colors bg-white cursor-pointer place-items-center hover:bg-blue-600 hover:text-white"
          >
            <PlayIcon class="w-3 h-3 fill-current" />
          </div>
        </div>
      </div>
      <div class="col-start-6">
        <div class="pt-3 text-xl font-normal leading-loose text-white">Testimonial</div>
        <div class="text-[13px] text-white/50 leading-loose">Tom Hope</div>
      </div>
      <div class="col-start-7">
        <div class="pt-5 leading-loose text-right text-[13px] text-white/50">20:45</div>
      </div>
      <div class="col-start-4">
        <div class="pt-3 text-xl font-normal leading-loose text-white">Watch Trailer</div>
        <div class="text-[13px] text-white/50 leading-loose">2 min</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ArrowRightIcon from "./icons/arrow-right.svg";
import PlayIcon from "./icons/play.svg";
const menu = ["Explore", "Mentors", "Blog", "Community"];
</script>
