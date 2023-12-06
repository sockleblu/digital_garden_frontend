<template>
  <main>
    <Main>
        <template v-slot:default>Explorations of a Former Backpacker</template>
        <template v-slot:subtitle></template>
    </Main>
    <div class="container">
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <section class="blog-post-card card article">
            <div class="card-content">
              <div class="content article-body is-size-5">
                <h1>Plans for this page</h1>
                <span v-html="CONTENT"></span>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/Go3-ir1CAtk?si=Vb_RYB3VjMVdn6w0" 
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
                <br><br>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/G2TzbuDRyVQ?si=k6p_v01Xrwjja8Pf" 
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const CONTENT = "It's been about 7 and a half years since I quit my first job out of college and went backpacking across Southeast Asia for 9 months. Sorry to say that travelling has trickled a bit since then, and the opportunity to sell all my belongings and leave the country is in my past, though the travel bug is still alive and well. It just lives a little different now.<br><br>With this space I'd like to cultivate my love for traveling by finding and sharing places to go, looking at where I've been - maybe by adding a map and pulling in data from other sites, and adding my personal story. I kept a travel blog when backpacking as well that I want to import here soon. Until then, you can check out these videos I made while trekking. First one is a compilation of a 3-day hike in Myanmar and the second is Yi Peng (latern festival) taken while in Chaing Mai, Thailand. Enjoy!<br><br>"
</script>