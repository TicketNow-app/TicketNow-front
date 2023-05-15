import React from "react";
import SkeletonLoader from "expo-skeleton-loader";
import { useTheme } from "styled-components/native";

export function CardSkeleton() {
  return (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{ width: 140, height: 140, borderRadius: 10, justifyContent: 'flex-end', backgroundColor: useTheme().colors.background_secondary, padding: 14 }}
      >
        <SkeletonLoader.Item
          style={{ width: 110, height: 14, marginBottom: 5, borderRadius: 2 }}
        />
        <SkeletonLoader.Item style={{ width: 60, height: 14, borderRadius: 2 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
}
