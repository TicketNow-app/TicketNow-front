import React from "react";
import SkeletonLoader from "expo-skeleton-loader";

export function CompanyTagSkeleton() {
  return (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{ width: 130, height: 130, borderRadius: 10, justifyContent: 'space-between', alignItems: 'center' }}
      >
        <SkeletonLoader.Item
          style={{ width: 90, height: 90, marginBottom: 5, borderRadius: 42 }}
        />
        <SkeletonLoader.Item style={{ width: 90, height: 14, borderRadius: 2 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
}
