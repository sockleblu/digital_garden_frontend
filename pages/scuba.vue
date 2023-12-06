<template>
  <main>
    <Main>
        <template v-slot:default>Bridger of Worlds</template>
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
                <br><br>
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
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const CONTENT = "For some reason I've always been interested in scuba diving. I originally got certified for Open Water when I was 13 after winning a silent auction using all my christmas money I've saved up. Since no one else in my family did scuba, and I couldn't afford to...well do anything, much less the gear to go myself, so I didn't go for many years after getting certified.<br><br>When I left to backpack in Southeast Asia I was determined to get certified again and go diving in new places while traveling. Well, I got certified, but I wasn't ready for the feeling of reconnecting with something I didn't know I missed so much. For four months I bounced back and forth from an island in Thailand named Koh Tao - or Turtle Island. It's famous for it's incredible number of scuba centers, and for being really cheap to get certified. After my Open Water certification, well of course I needed to take the Advanced Open course too. And from there, well the tide went out and drew me with it. I took my Rescue course and came back after a border run to start the Dive Master program - completing what the instructors would refer to as going 'Zero-to-Hero' - going all the way from open water to becoming a dive master.<br><br>I spent most of my time and my savings getting it, but it's a chapter of my life that was so natural it felt necessary, and I'd do it again. Here will be a place where I can share and grow that passion with others. Here's a little tase of some of the things I've seen."
</script>