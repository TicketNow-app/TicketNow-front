import React from "react";
import SkeletonLoader from "expo-skeleton-loader";
import { useTheme } from "styled-components";

export function CardLargeSkeleton() {
  return(
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{ width: 300, height: 150, borderRadius: 10, justifyContent: 'flex-end', backgroundColor: useTheme().colors.background_secondary, padding: 14 }}
      >
          <SkeletonLoader.Item
            style={{ width: 220, height: 14, marginBottom: 5, borderRadius: 2 }}
          />
        <SkeletonLoader.Item style={{ width: 150, height: 14, borderRadius: 2 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  )
}
