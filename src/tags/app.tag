<app>
  <div class="container">
    <h1 class="align-center">{ title }</h1>
    <div class="progress-bar striped animated">
      <span class="progress-bar-red" style="width: { width }%;"></span>
    </div>
    <yield/>
  </div>

  <script>
    this.title = 'Monster Farm Installer'
    this.width = 50;
    setInterval(()=>{
      this.width++;
      if(this.width>100) this.width = 0;
      this.update({width:this.width});
    },50);
  </script>

  <style>
    :scope { background-color: #70a6ff; height:100%; }
  </style>
</app>