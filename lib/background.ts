import html2canvas from 'html2canvas';

export async function isElementOverDarkBackground(elementId: string): Promise<boolean> {
  // Check if the code is running on the client-side
  if (typeof window === 'undefined' || !document) {
    return false;
  }

  const element = document.getElementById(elementId);

  if (!element) {
    // Element with the given ID not found
    return false;
  }

  try {
    // Use html2canvas to capture the content of the element
    const canvas = await html2canvas(element);

    // Get the image data of the captured content
    const context = canvas.getContext('2d');

    if (!context) {
      // getContext returned null
      console.error('Error getting 2D context.');
      return false;
    }

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    // Calculate the average color intensity
    let totalIntensity = 0;

    for (let i = 0; i < imageData.length; i += 4) {
      // Extract RGB values
      const red = imageData[i];
      const green = imageData[i + 1];
      const blue = imageData[i + 2];

      // Calculate intensity (average of RGB values)
      const intensity = (red + green + blue) / 3;

      totalIntensity += intensity;
    }

    // Calculate the average intensity
    const averageIntensity = totalIntensity / (canvas.width * canvas.height);

    // Choose a threshold value to determine dark or light
    const threshold = 20;

    return averageIntensity < threshold;
  } catch (error) {
    console.error('Error capturing element:', error);
    return false;
  }
}

// Example usage:
const elementId = 'yourElementId';
isElementOverDarkBackground(elementId).then((isDark) => {
  if (isDark) {
    console.log('The element is over a dark background.');
  } else {
    console.log('The element is over a light background.');
  }
});
