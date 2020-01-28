import React from 'react';

import './global.css';
import { Title } from './styles';

export default function Repository() {
  return (
      <Title>
    <aside>
    <strong>Github Search</strong>
    <form>
      <label htmlFor=""></label>
      <input name="github_username" id="username_github" required placeholder="Enter with your github username"/>
    </form>
    <main>
       <div>
           <u>
        <div >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAjVBMVEX///8YFxcaGRn8/PwcGxsoJyfk5OT4+PgfHh4lJCTz8/MiISHx8fH29vbq6uosKyvOzs5CQUHc3NympqY4Nzd5eXlbWlo7OjqGhoa+vr5nZmZNTEw5ODjHx8evr69VVFSdnJyQkJC6urqTk5NwcHAxMDB+fn7W1tZpaGh0c3Ogn5+JiIirq6tWVlZOTk4pSLRHAAAL10lEQVR4nO1d2ZqqvBKVBAEFEXCWrYCoqG37/o93BCeUkFQYEv/z9broK2hZJFWpmU7nD3/470G3bM3zvCRJrn81u49lPxAvsLZax8ep74533Z5pIKQaZm+4m7nBYX5aeAPZzwcAtp3RJBgaKlLKgFTTPcQb7YvpaJt5sCtn8A7T3Z4cXfYjF2E5kd+DknjA2G3X2jcJTn+zHfOSeKAXhJ7s579hsDju1Ios7lwuJ+nrgr1oVnUt8jCXi75EGvpi2muARQZ1FtmSaNgjtykWN5iTRMIOs+LK8k2hsnQE07DjYeMsMqCpI3BVBmELq/GAuUwE0dDXjSgqCpWJELF3pu3SSLELWzde7LnZOo0rkL9qVVTwZiaCRgpj3+L+sreGKB7XRZktWloUvPgnjkYKdW+1wUMXIx15IL8FTez5ommk6IVNb6/FTgaP6/aaNGoV65FAKf+A36DfZR3aPwPLsVs0xUPzZfK4miyjZgQlEXYIlsGImmCyaMlg54F6rG97bbqyWaRAh7rKa/0VPK5MlvWYnOWp3U9M6xiR68aCJPWBptXlZPM965Gi8u76Bn2VB9pW08LOl8h5DpMqTDTp52ARaszPxJZitrNgrHl56FPZz0xGd8XHA8/l2onl+KdxEVl/l+LNI+A5TpIvU7x5oDlc4O2G8wXNgkPgJxQBCeIwni9nRlsypA6DSRSGe4pxNISKyYbykObdg7Y2k1m9zCHxEafhPdeDl5TLfmE5em1M+R/Ba4P2V8dGz37kj3Kvek15myiG8MC0EwSd3q61QrepZRlu3/NufZq+MSCJLdqrUIzP2Mxg3UhkorsvBH1oe0u5sDeXRo3EucUb9I1bl0qXFHkf0e5gby68pf7khHRPf0STKibULTHC61E3bZcVtlvQ93yJCi+mf5DRG8785Xb/E8VhGMbR/nj4dXdd8/P/l6Z0+nTre0o/Fgd0mxeVvodcQk4dB8d442gEUwLbyWo0X7ovbTcsT7LRzVZ1QyVyom/3XXkAQD9d1Yzavcw3nsWyIQb2KjyMr2eqOqXskDn1URSX5vjajJi7TzPYtGO04qkm887HM40yVdqvCCn3Ml6CMuV4ztpgiCtte2is6M9RII+Ow3Il5qW37hl3KnuBPDoe67XuyoxHj2k6/YgkojEfp+y9Hlk3KtF3EemRpURjZ22/bEVKnueHed+XyYiijElLYgMMpq1IIkytVfAqbgjZPASfIwCjelY8oTEk4OCKrAM/AR5IKWZ8V5DbuiILQSeQJ1oWbqP7IXcggbWTOAC92k+rU4OF5EBefzOwYU/0ebQx7PcHBEr7AvRAivsu7rB1LD1L2wBIRK543+0aMGiNuPMTVYGhcYB3GxhyiKQIxJXiQzPjb0cJvgBv4ktO1AL+gYmtkU/9AMyaFF2hles6NUT3Qn5vnUHkUSiSB8z6U94DCQfQHTVKD6oBVrBgvPa7BaI+FN8LxXb1Uoye1zugnSXUq7oB4FspeXsrhlz+T0YTVAx5xbtndAyiHtCI9oNtwYIUf5uPILgOqemdtVLezQRkszzfcQJRDgLt3jwsyAn3iBuygqwpTDkLArMdHycJM8CokDwxQVgBkpTDm02Of9mXirN6P9EHxBLQTdotQGEWJfLdNiD75ZxdCYgwio0DvQMSFboFDiHxE0k6K4UFfs8ApaVylns1CoCQzLILWWmqK0yZPdoABdzLjBSADT+WyAPiht8seUAV5q9MIoC40G3rAywtYsGDKHhstZUdcxhgzQjNVH0C4pSk6QULYDKGMolAYqfpm4bE5qT4Ig9AHPH0RHQAVpk0SysjAjChDh2YeSmVCMRsTI92iC3z9SuSng+0mtIHzlKJAPz2oMOoYbzj64XdT4mwL1NCmUQg6jclcgYQkRCbe4FZs3QnAtlaQiseCkQAahVK5CCTiMN+vowIRGsFMolsAEQuHWClhEwikAqI9ByBnOymzKl3AA82C7slACKFkniRgLStpUFTiPWL6NXC7QLSD5nmEftfHMJO0YeMY8meD1LzIS30C5PhmzH4dYVa74AoLZSVbUGEqSdP2iHpNDWLYoNSp9I8Eog3ohhZjB2UChValpkHoERTUYbZpRA7XhnKmtEZQZ7Ozy5NQFl2WWFsUDf6bb/Aau4kBRsBYUblEUAcgDpziUXP7QNQHn7F3fAAlRMhKQEIkM56moIRiPVFhrhDvL7rbrnnzlk9QHdIEHcMGzzxaOWzYfVzv+KXBOK9KrnYCKwP3xBuyzO6Ih9QnwXysPou8ZbjCbbnX8XIoLMd2kbeHOj9zy/4rzuAoyS7oibxZqAOGcjjVWaqQ6fSXESmqUfQnv9cDwkkUJGh0hSiagDPYBrmKrCAJ8lVQZCamlqBDZ7BtMy93D64s94U5GHBZzC9F1uC+nky9BqbY0lDH1BDdsd7Tw+w6yRjImBNNGA7S4r3uHSfY3iseWpb4j2ekT8f2TRo/0wK9dhqpSbe8Izk/ewxAoXBnri0eDL251wjsZYf2wPmJj7RjVpaFLzgm7JSnGEBCgrl4K7bkBTvwDnCZ1awNWze0d3qtPEZ9dqce0AZIU1LKKRD/4LtwS//EFKwbtCwx86Rfwy6QWj6WhVkrHdOBQHbzryMi+r+eM0sizUKqkxzJ2UJij2Vr6NGP5VaPmoQJjUTc1hbH6pNfzWIcYRCxOLZi5SEmj0pl0LTnW8qK7H+KrpUnjdGnhBY7Gh374fNHrlWZ0MTRKS6x9NK43JX+tpqNHHrDLMrywgWm/jc28Fn/0RX6g6rSgd13ekkXkM22iLaBrNu3blcbol8Eiq8euHjJes29iAuggqaKJ7Umsj1+KnSsA6hrxJdHuHI3hxD5lACfUingS9O+KXKn+i73wfph8hwOhvmz1PnPeUR1h5dR5uwRXR5e9kNg/lUYzv3PXA3rw53nUpAm3lGHo57H02b3scqlDzCj0dQTo0C+ohDh3gw7e5yotudBfXnTZ7kb82Jwox3Rm4Euu/8/S7G1PAqV13BqpaUsAaakluv76Npp4qR0DYX4gpMQOp5y3+KGZc6E02RmxAvDHVBmwXM2VIGaQMrQ7nqfaAk4upnS5Kk3tSq1DTirFgBhwWLgGjHki6HXBCodDB+yEcEmGAiAVT2Sg4eP8Yi4vXISsh+NXdLWeWJ7uyNlYI8NOKR1dWQEljWhKSFuUckwSY0EH4IeOySx07epCSdw4tGV790+mGtqOPipFsWYEn0AuBDNIgmFbpvnIXbzbRsMveflw0v80UFNxHStk0AYx5rDuTZKo8qZsvGqXvqYf3qGcU/UbhObL2DK/jukIreInimzBDHSffy4cWzioLbP7wRWExd/k8bcYTOXzC5VIpG8gbz0cm0yzHr0FrOUqt4cNXIJne1CqRY/BO8U2YcwlmRT6ng2P9NVyg9nefpEnZ3/J/UqEAEcSf/1oTTZFiMXTuukX3rT/cqVA9VIMI/TgrHBCazoobFVaS8MhG3wuvCpJSJ2+hcKm4iu0rpDH1JUMLjJmuEeIlUHYtlEZVw3FzgmpNIt3JVj0UahIb8Kod4A0TMGtVJNnGkm/pbPdRbnUi9bDKZSWohrvrv2goPPO4dzEPErJkhs0q/NN27HMP1ykkcZ7U5/Rz8Ln9LAweR6vLxYkL9AdUwnucNNxHQINgbjwbqLXRKZuQd7REZNzKOUAcOTGyPiNtQ0wcewVJK3HN5YERQrU86fvwiqKiiHSJo32TZngcp12mFSLfhEp4BMW7SPpFZ41NH8ZqZruImwnR11UMbPRJe6dl4B/dgHhaRYUuVYYOInnnj7rGmE0EtFlMlAW1RmiUyjNvsdB7ElMDzhfe/UeJaKGi76ltblqqvBomMW6kGewdelGWafPbN7ygjYszFNHQNRmOiqDRExDyI66e1I9Kh0ggRdSq2BcqOiuZXA0SM5usLmbCjzxqb2urXXIqnkaJ/9t98rvLvSpXgrQEHDScNlRVWAF5tX8LS49b8+JV7U/2TvHGpGbTTfVnMCiOftNvnLdFuspI5sOQBL5r6l0mlk3gQXm/dbr6BxR/+8H+O/wF3yccS1qCvOwAAAABJRU5ErkJggg==" alt=""/>
        </div>

        <div>
        <label htmlFor="usuario">@usuario</label>
        </div>

        <div>
        <img src="https://img.icons8.com/material/24/000000/next-location.png"  alt=""/>
        <label htmlFor="localização">localização</label>
        </div>

        <div>
        <img src="https://img.icons8.com/pastel-glyph/64/000000/box--v1.png" width="20" height="20" alt=""/>
        <label htmlFor="repositorio">repositorio</label>
        </div>

        <div>
    <img src="https://img.icons8.com/windows/32/000000/edit-user.png" alt=""/>
        <label htmlFor="amigos">amigos</label>
        </div>
        </u>
        </div>
    </main>
    <nav>
        <div>
            <li className="dev-item">
        <strong>Alisson Silva</strong>
        <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt=""/>
        </li>
        </div>

        <div>
            <li className="dev-item">
        <strong>Alisson Silva</strong>
        <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt=""/>
        </li>
        </div>

        <div>
            <li className="dev-item">
        <strong>Alisson Silva</strong>
        <img src="https://img.icons8.com/material-sharp/24/000000/star.png" alt=""/>
        </li>
        </div>


    </nav>
     </aside>
     </Title>
  );
}
