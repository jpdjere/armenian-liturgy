import { useEffect, useState } from "react";
import styles from '../styles/Lyrics.module.css'
type LyricsProps = {
  time: number;
}

const lyrics = [{"armenian":"Քրիստոս ի մէջ մեր յայտնեցաւ.","phonetic":"Krisdos ee mech mer haydnetzav,","english":"Christ in our midst has been revealed;","minutes":47,"second":55,"totalSecond":2875},
{"armenian":"Որ Էնն Աստուած աստ բազմեցաւ.","phonetic":"Vor enn Asdvadz asd pazmehtzav.","english":"He Who Is, God, is here seated.","minutes":48,"second":1,"totalSecond":2881},
{"armenian":"Խաղաղութեան ձայն հնչեցաւ,","phonetic":"Khaghaghootyan tsayn hunchetzav,","english":"The voice of peace has resounded;","minutes":48,"second":6,"totalSecond":2886},
{"armenian":"Սուրբ ողջունի հրաման տուաւ.","phonetic":"Soorp voghchooni hraman duvav,","english":"Holy greeting is commanded.","minutes":48,"second":11,"totalSecond":2891},
{"armenian":"Եկեղեցիս մի անձն եղեւ,","phonetic":"Yegeghetzis mi antzn yeghev,","english":"This Church has now become one soul,","minutes":48,"second":15,"totalSecond":2895},
{"armenian":"Համբոյրս յօդ լրման տուաւ.","phonetic":"Hampooyrus hot lurman duvav,","english":"The kiss is given for a full bond.","minutes":48,"second":20,"totalSecond":2900},
{"armenian":"Թշնամութիւնն հեռացաւ,","phonetic":"Tushnamootyunun heratsav,","english":"The enmity has been removed; ","minutes":48,"second":24,"totalSecond":2904},
{"armenian":"Սէրն յընդհանուրս սփռեցաւ:","phonetic":"Sern huntanoorus supretsav.","english":"And love is spread over us all.","minutes":48,"second":29,"totalSecond":2909},
{"armenian":"Արդ, պաշտօնեայք բարձեալ զձայն","phonetic":"Art bashdonyaik partzyal uztsayn,","english":"Now, Ministers, raise your voices","minutes":48,"second":34,"totalSecond":2914},
{"armenian":"Տու՛ք զօրհնութիւն ի մի բերան.","phonetic":"Dook zorhnootyun ee mi peran.","english":"And give blessings with one accord","minutes":48,"second":38,"totalSecond":2918},
{"armenian":"Միասնական Աստուածութեանն","phonetic":"Miasnagan Asdvadzootyan,","english":"To the Godhead consubstantial,","minutes":48,"second":43,"totalSecond":2923},
{"armenian":"Որում սրովբէքն են սրբաբան:","phonetic":"Voroom srovpekn yen surpapan","english":"While angels sing: “Holy, Holy, Holy.”","minutes":48,"second":47,"totalSecond":2927}];

type LyricsType = {armenian: string, phonetic: string, english: string} | null;
export const Lyrics: React.FC<LyricsProps> = ({time}) => {

  const [lyric, setLyric] = useState<LyricsType>(null);
  useEffect(() => {
    const currentLyricIndex = lyrics.findIndex((lyric, index, array) => {
      if(index === lyrics.length - 1) {
        return lyrics[lyrics.length - 1];
      }
      const nextLyric = array[index+1];
      return time > lyric.totalSecond && time < nextLyric.totalSecond;
    });
    if(time < 2875) {
      setLyric(null)
    } else {
      setLyric(lyrics[currentLyricIndex])
    }
  }, [time])
  return (
    <div className={styles.lyrics}>
      <p><b>{lyric?.armenian}</b></p>
      <p>{lyric?.phonetic}</p>
      <p>{lyric?.english}</p>
    </div>
  );
}