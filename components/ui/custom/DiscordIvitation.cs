@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient {
  background: linear-gradient(-45deg, #7289da, #9b59b6, #3498db, #2ecc71);
  background-size: 400% 400%;
}

.animate-gradient {
  animation: gradientAnimation 15s ease infinite;
}

