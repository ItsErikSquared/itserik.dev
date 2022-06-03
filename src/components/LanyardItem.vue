<script lang="ts">
import { ref } from "vue";
import { useLanyard, type LanyardData } from "@leonardssh/use-lanyard";

var presence = ref({});
var spotify = ref({});
var activity = ref({});

export default {
  data() {
    return {
      presence,
      spotify,
      activity,
    };
  },
  async mounted() {
    await useLanyard({
      userId: "161253450997301248",
      socket: true,
      onPresenceUpdate(received: LanyardData) {
        presence.value = received;
        spotify.value = received.spotify;

        activity.value = received.activities.filter((act) => act.type == 0)[0];

        console.log(received);
      },
    });
    console.log("Lanyard Initialized");
  },
  unmounted() {
    //todo close lanyard??
  },
};
</script>

<template>
  <!-- <div v-if="activity" class="activity">
    <h5>Doing...</h5>
    <div class="info">
      <img
        v-if="activity.assets && activity.assets.large_image"
        :src="
          activity.assets.large_image.replace(
            'mp:',
            'https://media.discordapp.net/'
          )
        "
      />
      <img
        v-if="activity.assets && activity.assets.small_image"
        class="small"
        :src="
          activity.assets.small_image.replace(
            'mp:',
            'https://media.discordapp.net/'
          )
        "
      />
      <div class="text">
        <a>{{ activity.name }}</a>
        <p>{{ activity.state }}</p>
        <p>{{ activity.details }}</p>
      </div>
    </div>
  </div> -->
  <div v-if="presence.listening_to_spotify" class="spotify">
    <h5>Jamming to...</h5>
    <div class="info">
      <div class="text">
        <a :href="'https://open.spotify.com/track/' + spotify.track_id">
          {{
            spotify.song.split("-")[0].length > 33
              ? spotify.song.split("-")[0].substring(0, 30) + "..."
              : spotify.song.split("-")[0]
          }}
        </a>
        <p>{{ spotify.artist.split(";")[0] }}</p>
      </div>
      <img :src="spotify.album_art_url" />
    </div>
  </div>
</template>

<style>
@media only screen and (min-width: 750px) {
  h5,
  a,
  p,
  a:link,
  a:visited {
    margin: 0px;
    padding: 5px;
    color: rgba(0, 0, 0, 0.3);
    transition: 0.5s;
  }

  p.title,
  a.title {
    padding: 5px;
  }

  a:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  .activity,
  .spotify {
    bottom: 0px;
    position: fixed;
    padding: 5px;
  }

  .activity img,
  .spotify img {
    height: 50px;
    border-radius: 15px;
  }

  .activity {
    left: 0px;
    text-align: left;
  }

  .activity .small {
    height: 20px;
    bottom: 3px;
    left: 40px;
    position: absolute;
  }

  .spotify {
    right: 0px;
    text-align: right;
  }

  .info {
    display: flex;
  }

  .info .text {
    display: block;
    position: relative;
  }
}
</style>
