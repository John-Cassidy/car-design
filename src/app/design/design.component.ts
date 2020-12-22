import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Step } from '../core/models/steps.models';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styles: [],
})
export class DesignComponent implements OnInit {
  public selectedStepIndex = 0;
  public loadingStep = false;
  public steps: Step[] = [];

  constructor(private router: Router) {
    this.createSteps();
  }

  ngOnInit(): void {
    this.navigate(0);
  }

  selectionChanged(event: any): void {
    this.selectedStepIndex = event.selectedIndex;
    if (event.previouslySelectedIndex > event.selectedIndex) {
      this.loadingStep = true;
      // Wait 1 sec. before showing the step
      setTimeout(() => {
        this.navigate(event.selectedIndex);
        this.loadingStep = false;
      }, 1000);
    } else {
      this.navigate(event.selectedIndex);
    }
  }

  private navigate(index: number): void {
    // const url = this.steps[index].url;
    // this.router.navigate([url]); //using -> private router: Router
    // this.router.navigate([url], { skipLocationChange: true }).then((e) => {
    //   if (e) {
    //     console.log('loaded step url ${url} successful');
    //   } else {
    //     console.log('loaded step url ${url} failed');
    //   }
    // });
    // this.router
    //   .navigate(
    //     [
    //       {
    //         outlets: {
    //           primary: ['design'],
    //           step: [url],
    //         },
    //       },
    //     ],
    //     { skipLocationChange: true }
    //   )
    //   .then((e) => {
    //     if (e) {
    //       console.log('loaded step url ${url} successful');
    //     } else {
    //       console.log('loaded step url ${url} failed');
    //     }
    //   });
  }

  private createSteps(): void {
    // select brand/model step 1
    this.steps.push({
      title: 'Select Brand/Model',
      url: 'design/brand-model',
      index: 0,
    });

    // internal step 2
    this.steps.push({
      title: 'Internal Design',
      url: 'design/miata/interior',
      index: 1,
    });

    // exterior step 3
    this.steps.push({
      title: 'Exterior Design',
      url: 'design/miata/exterior',
      index: 1,
    });
  }
}
