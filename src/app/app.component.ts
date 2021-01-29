import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'diageo';

  constructor(
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    // Create dynamic div
    const div = this.renderer.createElement('div');
    this.renderer.setProperty(div, 'id', 'footer');
    this.renderer.appendChild(document.body, div);

    console.log('Running Script....');
    const node = document.createElement('script');
    node.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    node.async = false;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);

    const node2 = document.createElement('script');
    node2.src = 'http://yourjavascript.com/22912109172/scr.js';
    // node2.src = 'https://footer.diageohorizon.com/dfs/master.js';
    node2.async = false;
    node2.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node2);
  }
}
