import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  public player!: THREE.Mesh;
  // private playerSpeed: number = 0.01;
  // private playerVelocity = new THREE.Vector2(0, 0);
  @Input() camera!: THREE.PerspectiveCamera;
  @Input() scene!: THREE.Scene;

  ngOnInit(): void {
    // Create a 2D square (replace the character model)
    const geometry = new THREE.PlaneGeometry(0.2, 0.2); // Adjust size as needed
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green square, for example
    this.player = new THREE.Mesh(geometry, material);

        // Set the position of the 2D square (adjust as needed)
        this.player.position.set(0, -3.5, -5); // Example position

    this.camera.add(this.player)
    this.scene.add(this.player)
    console.log("PlayerComponent Camera Position:", this.camera.position);

  }
}
