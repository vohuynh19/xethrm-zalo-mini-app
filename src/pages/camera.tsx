import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Page, useNavigate, useSnackbar } from "zmp-ui";
import api, {
  FacingMode,
  PhotoFormat,
  PhotoFrame,
  PhotoQuality,
  ZMACamera,
} from "zmp-sdk";

const CameraPage = () => {
  const cameraRef = useRef<ZMACamera | null>(null);
  const videoRef = useRef(null);
  const snackbar = useSnackbar();
  const navigate = useNavigate();

  const [data, setData] = useState("");

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      console.log("Media component not ready");
      return;
    }
    if (!cameraRef.current) {
      cameraRef.current = api.createCameraContext({
        videoElement: videoElement,
        mediaConstraints: {
          width: 640,
          height: 480,
          facingMode: FacingMode.FRONT,
          audio: false,
        },
      });

      cameraRef.current.start();
    }

    return () => {
      cameraRef.current?.stop();
    };
  }, []);

  return (
    <Page>
      <Box>
        <video
          style={{ width: "100vw", height: "auto" }}
          ref={videoRef}
          muted
          playsInline
          webkit-playsinline
        />
      </Box>

      <Box mt={5} flex alignContent={"center"} justifyContent="center">
        <Button
          size="large"
          className="mb-2"
          variant="primary"
          loading={Boolean(data)}
          onClick={() => {
            let result: PhotoFrame = cameraRef.current?.takePhoto({
              quality: PhotoQuality.NORMAL,
              format: PhotoFormat.JPEG,
              minScreenshotHeight: 1000,
            });
            cameraRef.current?.stop();
            setData(result.data);

            setTimeout(() => {
              if (result) {
                snackbar.openSnackbar({
                  type: "success",
                  text: "Chấm công thành công",
                });
              } else {
                snackbar.openSnackbar({
                  type: "error",
                  text: "Có lỗi xảy ra!",
                });
              }
              navigate(-1);
            }, 500);
          }}
        >
          Chấm công
        </Button>
      </Box>
    </Page>
  );
};

export default CameraPage;
