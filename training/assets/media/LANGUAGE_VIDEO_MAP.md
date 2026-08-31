# Language Video Map

This project is configured so each selected language loads its own intro and final training video.

## Required production video files

```text
assets/media/intro-es.mp4
assets/media/final-es.mp4

assets/media/intro-en.mp4
assets/media/final-en.mp4

assets/media/intro-ko.mp4
assets/media/final-ko.mp4

assets/media/intro-zh.mp4
assets/media/final-zh.mp4
```

## Language routing

```text
Español  -> intro-es.mp4 -> final-es.mp4
English  -> intro-en.mp4 -> final-en.mp4
한국어     -> intro-ko.mp4 -> final-ko.mp4
中文      -> intro-zh.mp4 -> final-zh.mp4
```

## Temporary fallback behavior

The JavaScript includes fallback demo videos so the flow does not break while real videos are not installed yet.

For production, replace the placeholders by copying the real videos into `assets/media/` using the exact file names above.
