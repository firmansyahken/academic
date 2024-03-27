import React, { useMemo, useState } from "react";
import Fab from "../components/Fab";
import { useParams } from "react-router-dom";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { BASE_API } from "../utils/Constant";

const DetailNote = () => {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState("");
  const [repoLink, setRepoLink] = useState("")

  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
    })
  );

  useMemo(() => {
    fetch(
      `${BASE_API}/repos/firmansyahken/catatan/contents/${id}?ref=main`
    )
      .then((r) => r.json())
      .then((response) => {
        setData(atob(response.content));
        setRepoLink(response.html_url)
      });
  }, []);

  return (
    <>
      <Fab
        repo={repoLink}
      />
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: marked.parse(data) }}
      ></div>
    </>
  );
};

export default DetailNote;
