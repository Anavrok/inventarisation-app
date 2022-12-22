import { Component } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventarisation-app';
  image = '';

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });

    if (image) {
      this.image = `data:image/jpeg;base64,${image.base64String}`!;
    }
  }
}
